import { Component } from "react";

/**Class Based Componenetlerde LifeCyle Çalışma Sırası
 *constructor(){}        ===> Çünkü compoenenti kurucu metoddur
 *render (){}            ===> Çünkü ekrana compoenenti basan metoddur
 *componentDidMount(){}  ===> Çünkü componentin ekrana basıldığı anı yakalar
 *componentDidUpdate(){} ===> Çünkü sadece compoenentte değişiklik olduğunda çalışır
 */

 /**Fonksiyon ile Metod arasındaki fark
  * Fonksiyonlar bizim oluşturduğumuz yapılar 
  * Metod ise javascriptin veya kütüphanenin kendisinden hazır gelen fonksiyon benzeri yapılar
  */

class Sayac extends Component {
  //Kurucu Metodu
  constructor(props) {
    console.log("constructor çalıştı");
    //miras alma
    super(props);

    this.state = {
      count: 0,
    };
  }

  //compoenentte değişiklik olduğu zaman çalışır
  componentDidUpdate() {
    console.log("did update çalıştı");
  }

  //Componentin Ekrana Basıldığı Anı Yakalamak İçin
  componentDidMount() {
    console.log("didmount Çalıştı");
  }

  componentWillUnmount(){
    console.log('Class component ekrandn giti')
  }

  //sayacı değiştiren fonksiyon
  changeCount = (changeType) => {
    if (changeType === "arttir") {
      this.setState({ count: this.state.count + 1 });
    } else if (changeType === "azalt") {
      this.setState({ count: this.state.count - 1 });
    }
  };
  //compoenenti ekrana basan metod
  render() {
    console.log("render çalıştı");
    return (
      <div>
        <button onClick={() => this.changeCount("arttir")}>ARTTIR</button>
        <p>{this.state.count}</p>
        <button onClick={() => this.changeCount("azalt")}>AZALT</button>
      </div>
    );
  }
}

export default Sayac;
