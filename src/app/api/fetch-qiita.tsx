import { QiitaItemsProps } from "../../../types/qiita-response";
const secretKey = process.env.API_QIITA_KEY;
const key = {
  headers: {
    'Accept': 'application/json',
    'Authorization': `Bearer ${secretKey}`
  },
}

const fetchQiita = async (): Promise<QiitaItemsProps[]> => {
  console.log("fetching-start");
  
  const res = await fetch(
    "https://qiita.com/api/v2/items?page=1&per_page=10&query=user:Mon50"
  );
  
  const data: QiitaItemsProps[] = await res.json();
  const updatedData = data.map(item => ({
    ...item,
    cite: 'Qiita'
  }));

  return updatedData;
}


export default fetchQiita;
