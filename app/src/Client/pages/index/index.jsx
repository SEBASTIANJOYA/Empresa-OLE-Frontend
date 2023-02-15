import React from 'react';
import "./index.css"
import pizza from "../../../img/imagen-pizza.jpg"
import perro from "../../../img/imagen-perro-caliente.jpg"
import salchipapa from "../../../img/imagen-salchipapa.jpg"
import arepa_rellena from "../../../img/image-arepa-rellena.jpg"
import choripapa from "../../../img/imagen-choripapa.jpg"
import choriperro from "../../../img/imagen-choriperro.png"
import sandwich from "../../../img/imagen-sandwich.jpg"
import ScheduleRestaurant from '../../components/section-schedule/schedule_restaurant';
const Index=()=>{



    return(
        <>
        
            <div className="container-categories">
            <h1 className="container-categories__h1">OLÉ TE OFRECE DIFERENTES PRODUCTOS PARA EL CUIDADO CAPILAR.</h1>
            <div className="container-categories__div-product"><figure><img src="https://d2d21jw8en5l3a.cloudfront.net/vendty2_db_38682_gere2020/imagenes_productos/352_shampoo_mix_de_frutas_ol_capilar_imagen.png"/><div className="name"><a>Shampoo Mix de Frutas OLÉ</a></div></figure></div>
            <div className="container-categories__div-product"><figure><img src="https://www.curlao.com/wp-content/uploads/2021/09/Screenshot_20210920-212047_Instagram-1-600x600.jpg"/><div className="name"><a >Acondicionador de Coco OLÉ</a></div></figure></div>
            <div className="container-categories__div-product"><figure><img src="https://www.curlao.com/wp-content/uploads/2022/03/Screenshot_20220310-112229_Instagram-768x767.jpg"/><div className="name"><a>Exfoliante Capilar OLÉ</a></div></figure></div>
            <div className="container-categories__div-product"><figure><img src="https://www.curlao.com/wp-content/uploads/2022/03/Screenshot_20220310-112151_Instagram-768x767.jpg"/><div className="name"><a>Crema para peinar de Coco OLÉ</a></div></figure></div>
            <div className="container-categories__div-product"><figure><img src="https://www.curlao.com/wp-content/uploads/2022/03/Screenshot_20220310-111749_Instagram-768x767.jpg"/><div className="name"><a>Oleo de Uchuva OLÉ</a></div></figure></div>
            <div className="container-categories__div-product"><figure><img src="https://www.curlao.com/wp-content/uploads/2021/09/Screenshot_20210920-212325_Instagram-600x600.jpg"/><div className="name"><a>Shampoo de Cebolla OLÉ</a></div></figure></div>
            <div className="container-categories__div-product"><figure><img src="https://www.curlao.com/wp-content/uploads/2022/06/Screenshot_20220607-135918_Instagram.jpg"/><div className="name"><a>Potencializador Capilar OLÉ</a></div></figure></div>
            <div className="container-categories__div-product"><figure><img src="https://www.curlao.com/wp-content/uploads/2022/06/Screenshot_20220607-135138_Instagram-768x768.jpg"/><div className="name"><a>Agua micelar de pepino OLÉ</a></div></figure></div>
            <div className="container-categories__div-product"><figure><img src="https://www.curlao.com/wp-content/uploads/2022/06/Screenshot_20220607-145349_Instagram-768x767.jpg"/><div className="name"><a>Shampoo revitalizante de arroz OLÉ</a></div></figure></div>
            </div>
            
            <section>
                <ScheduleRestaurant/>
            </section>
        </>
    )
}


export default Index;