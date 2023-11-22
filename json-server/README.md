# Axios

Axios ve Fetch en popüler iki veri çekme kütüphanesidir

Faydaları:

- Özelleştirebilir
- Axios ,otomatik olarak Json verilerini işler.
- Hata ayklama özellikleri vardır
- HTTP isteklerini (get,post,delete,put)

Kullanımı:

- Projeye Axios kütüphanesi indirip kuryoruz (npm i axios)
- kullanmak istediğiniz yerlerde axios import ediyoruz

  Verilerin tutulacağı stateyi ayarlama
  const [productList, setProductList] = useState([]);
  eski metod
  useEffect(() => {
  fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((productList) => console.log("2.dönen yanıt", productList.products))
  .catch((error) => console.log("Veri Çekme Hatası", error));
  }, []);

  useEffect(() => {
  axios
  .get("https://dummyjson.com/products")
  .then((response) => setProductList(response?.data?.products))
  .catch((error) => console.log("axiosget hatası", error));
  }, []);
  console.log("Ürünler State", productList);

HTTP İsteği Yapma:

- Veri Alma İsteği Yapma
- axios.get('endpoint')

- Yeni Veri Ekleme İsteği
- axios.post('endpoint',{gönderilecekVeri})

- Veri Silme isteği
- axios.delete('endpoint/silinecek elemanın idsi')

- Veri Güncelleme İsteği
-axios.put('endpoint/id',güncelşenecek eleman)

# Json Server

- Sahte bir API oluşturmaya yarar
- Kendi bilgisayarımızda bir API oluşturur
- Oluşturdğu API temeli bir json dosyasıdır

Faydaları:

- Prototip Oluşturma: gerçek API kullanılmadığı zamana hızlıca basit bir versiyonu oluşturlabilir

- Frontend geliştirmede kolaylık sağlar
- kullanımı basittir

Kullanım:

- Json serveri projeye indirip kurlur (npm i json-server)
- proje klasörü içerisine bir json dosyası oluşturlur
- json dosyası içierin etutmak istediğimiz yapıya göre verileri eklenir


# Sık Kullanılan JavaScript Dizi Metodları

- filter: istenilen paramrteryee göre bir dizi döndürür (genelde silme işlemlerinde kullnaılır)
- find: istenilen elemanı diziden bulur (tek manı döndürür)
- slice: istenilen elemanın yerine başka bir eleman koymak için kullanılır (dizi dönüd)
- splice: diziyi 2 ye bölmeye yarar
- findIndex: istenilen elemanın indexini bulur(eleman döndürür)
- map: dizideki tüm elemanları teker teker dönmeye yarar

