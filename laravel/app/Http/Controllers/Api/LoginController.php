<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    /**
     * register
     *
     * @param  \Illuminate\Http\Request $request
     *
     * @return Response
     */
    public function register(Request $request){
        $validator = Validator::make($request->all(), [
          'name'    => 'required|max:191',
          'email'   => 'required|email|max:191|unique:users,email',
          'password'=> 'required|min:8',
        ]);

        if($validator->fails()){
          // Return laravel validation messages
          return response()->json([
            'validation_errors'=>$validator->messages(),
          ]);
        } else {
          // create user
          $user = User::create([
            'name'    => $request->name,
            'email'   => $request->email,
            'password'=> Hash::make($request->password),
          ]);

          // create token
          $token = $user->createToken($user->email.'_Token')->plainTextToken;

          return response()->json([
            'status'       => 200,
            'username'     => $user->name,
            'access_token' => $token,
            // 'token_type' => 'Bearer',
            'message'      =>'Registerd Successfully'
          ]);
        }
    }

    /**
     * login
     *
     * @param  \Illuminate\Http\Request $request
     *
     * @return Response
     */
    public function login(Request $request) {
        $validator = Validator::make($request->all(), [
          'email'    => 'required',
          'password' => 'required',
        ]);

        if ($validator->fails()){
          // Return laravel validation messages
          return response()->json([
            'validation_errors' => $validator->messages(),
          ]);
        } else {
          $user = User::where('email', $request->email)->first();
          if (! $user || ! Hash::check($request->password, $user->password)) {
              return response()->json([
                'status' => 401,
                'message'=> '入力情報が不正です',
              ]);
          } else {
            // delete & create (refresh) token
            $user->tokens()->where('name', 'token-name')->delete();
            $token = $user
              ->createToken($user->email.'_Token')
              ->plainTextToken;

            return response()->json([
              'status'  => 200,
              'username'=> $user->name,
              'token'   => $token,
              'message' => 'ログインに成功しました。'
            ]);
          }
        }
    }

    /**
     * logout
     *
     * @return Response
     */
    public function logout(){
      // delete token
      auth()->user()->tokens()->delete();

      return response()->json([
          'status' => 200,
          'message'=> 'ログアウト成功',
      ]);
    }
}
