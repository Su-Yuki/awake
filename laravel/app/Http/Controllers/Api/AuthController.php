<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    /**
     * register
     *
     * @param  \Illuminate\Http\Request $request
     *
     * @return Response
     */
    public function getUser(Request $request){
      $user = Auth::user();

      return response()->json([
        'status'       => 200,
        'userId'       => $user->id,
        'username'     => $user->name,
        'message'      => ['ユーザの取得に成功しました。']
      ], 200);
    }

    /**
     * register
     *
     * @param  \Illuminate\Http\Request $request
     *
     * @return Response
     */
    public function register(Request $request){
        $validator = Validator::make($request->all(), [
          'registerName' => ['required', 'max:100'],
          'email'        => ['required', 'email', 'unique:users,email'],
          'password'     => ['required', 'min:8'],
        ]);

        if($validator->fails()){
          // Return laravel validation messages
          return response()->json([
            'status' => 400,
            'message'=> $validator->messages()->all(),
          ]);
        } else {
          // create user
          $user = User::create([
            'name'    => $request->registerName,
            'email'   => $request->email,
            'password'=> Hash::make($request->password),
          ]);

          return response()->json([
            'status'       => 200,
            'userId'       => $user->id,
            'username'     => $user->registerName,
            'message'      => ['新規登録に成功しました。']
          ], 200);
        }
    }

    /**
     * login
     *
     * @param  \Illuminate\Http\Request $request
     *
     * @return Response
     */
    public function login(Request $request)
    {
      $email    = $request->email;
      $password = $request->password;

      $validator = Validator::make($request->all(), [
        'email'    => ['required', 'email'],
        'password' => ['required'],
      ]);

      if($validator->fails()){
        // Return laravel validation messages
        return response()->json([
          'status' => 400,
          'message'=> $validator->messages()->all(),
        ]);
      }

      if (Auth::attempt(['email' => $email, 'password' => $password])) {
        $request->session()->regenerate();
        $user = User::where('email', $request->email)->first();

        return response()->json([
          'status'   => 200,
          'userId'   => $user->id,
          'userName' => $user->name,
          'message'  => ['ログインに成功しました。']
        ], 200);
      } else {
        // Return laravel validation messages
        return response()->json([
          'status' => 400,
          'message'=> ['メールアドレスかパスワードが間違っています'],
        ]);
      }
    }

    /**
     * logout
     *
     * @return Response
     */
    public function logout(Request $request)
    {
      Auth::logout();

      $request->session()->invalidate();

      $request->session()->regenerateToken();

      return redirect('/');
    }
}
