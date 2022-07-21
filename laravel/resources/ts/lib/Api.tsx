// ---[ import ]----------------------------------------------------------------
import axios from 'axios';

/* types */
import { Thema } from '../type/Thema';

// ---[ process ]---------------------------------------------------------------
// const URL = `https://`;
// const URL = `http://localhost/`;

/* --- Related user --------------------------------------------------------- */
// 既にログイン済みの場合のユーザ情報を取得
export const getUser = async() => {
  try {
    const user = await axios.get(`api/user`);
    return user.data;
  } catch (error) {
    console.log('Error getUser');
    console.error(error);
  }
}


/* --- Related theme -------------------------------------------------------- */
// テーマリストの取得
export const listTheme = async() => {
  try {
    const theme = await axios.get(`api/thema`)
    return theme.data;
  } catch (error) {
    console.log('Error listTheme');
    console.error(error);
  }
}

// テーマの新規作成
export const storeTheme = async(user_id: number| string | undefined, themaName: string) => {
  try {
    const theme = await axios
      .post('api/thema/store', {
        user_id: user_id,
        thema:   themaName
      })
      .then((res) => {
        return res.data.thema;
      })
      .catch(error => {
        console.log(error);
      });
      return theme;
  } catch (error) {
    console.log('Error storeTheme');
    console.error(error);
  }
}

// テーマの更新
export const updateTheme = async(id: number, thema: string) => {
  try {
    await axios
      .put(`api/thema/update/${id}`, {
        thema: thema
      })
  } catch (error) {
    console.log('Error updateTheme');
    console.error(error);
  }
}

// テーマの削除
export const deleteTheme = async(id: number) => {
  try {
    await axios.delete(`api/thema/delete/${id}`);
  } catch (error) {
    console.log('Error deleteTheme');
    console.error(error);
  }
}


/* --- Related innerword ---------------------------------------------------- */


