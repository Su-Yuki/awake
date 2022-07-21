// ---[ import ]----------------------------------------------------------------
import axios from 'axios';

/* types */
import { Thema } from '../type/Thema';
import { InnerWord, InnerItemPram } from '../type/InnerWord';

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
export const storeTheme = async(user_id: number | string | undefined, themaName: string) => {
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
export const updateTheme = async(themaId: number, thema: string) => {
  try {
    await axios
      .put(`api/thema/update/${themaId}`, {
        thema: thema
      })
  } catch (error) {
    console.log('Error updateTheme');
    console.error(error);
  }
}

// テーマの削除
export const deleteTheme = async(themaId: number) => {
  try {
    await axios.delete(`api/thema/delete/${themaId}`);
  } catch (error) {
    console.log('Error deleteTheme');
    console.error(error);
  }
}


/* --- Related innerword ---------------------------------------------------- */
// InnerWordの取得
export const listInnerWord = async(themaId: number | string | undefined) => {
  try {
    const innerWord = await axios.get(`//localhost/api/inner_words?thema_id=${themaId}`)
    return innerWord.data.inner_word;
  } catch (error) {
    console.log('Error listInnerWord');
    console.error(error);
  }
}

// InnerWordItemの取得
export const listInnerWordItem = async(innerWordID: number | string | undefined) => {
  try {
    const innerWord = await axios.get(`//localhost/api/inner_words/show?inner_word_id=${innerWordID}`)
    return innerWord.data.inner_word;
  } catch (error) {
    console.log('Error listInnerWord');
    console.error(error);
  }
}

// InnerWordの新規作成
export const storeInnerWord = async(themaId: number | string | undefined, innerWordName: string) => {
  try {
    const innerWord = await axios
      .post('//localhost/api/inner_words/store', {
        thema_id:   themaId,
        inner_word: innerWordName
      })
      .then((res) => {
        return res.data.inner_word;
      })
      .catch(error => {
        console.log(error);
      });
      return innerWord;
  } catch (error) {
    console.log('Error storeInnerWord');
    console.error(error);
  }
}

// InnerWordの更新
export const updateInnerWord = async(
  themaId:   number | string | undefined,
  innerWord: string
) => {
  try {
    await axios
      .put(`//localhost/api/inner_words/update_title/${themaId}`, {
        inner_word: innerWord
      })
  } catch (error) {
    console.log('Error updateInnerWord');
    console.error(error);
  }
}

// InnerWordItemの更新
export const updateInnerWordItem = async(
  innerWordID: number | string | undefined,
  ItemData:    InnerItemPram
) => {
  try {
    await axios
      .put(`//localhost/api/inner_words/update_item/${innerWordID}`, {
        so_word:      ItemData?.so_word,
        really_word:  ItemData?.really_word,
        why_word:     ItemData?.why_word,
        outside_word: ItemData?.outside_word,
      })
  } catch (error) {
    console.log('Error updateInnerWord');
    console.error(error);
  }
}

// テーマの削除
export const deleteInnerWord = async(innerWordID: number) => {
  try {
    await axios.delete(`//localhost/api/inner_words/delete/${innerWordID}`);
  } catch (error) {
    console.log('Error deleteTheme');
    console.error(error);
  }
}

