import { Component } from '@angular/core';
// import crypt from '../assets/CryptLib';
import cryptlib from '../assets/CryptLib'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demoAngular';
  ngOnInit() {
    console.log(cryptlib.decryptCipherTextWithRandomIV("TEi0/REmkb6AMKD6O+TjBz+AZeBsMVz8Ba+J20EY2YM=", "9psmJHiPf2F6LhT2oHH1ZS7D90baDGfnNNYl1m2QN2FYnsYKkplo9kfCgacAupnIFc11LAuOfQrc7d/e16J95mXx6WLXvd9qF+A8jc85fbXc5ObXvUs0NfDMiK6DRzmMnQrPzcqtFKqkGsbdyFC6ULKsu9PNeYaTITAgOGBd/Yu69NBOJjbilN7+6YcE6xsesdcEfKVnaZ1MbhJwvhT2LYB/hgw8CoQ5CqMUssbz9dTdxsYkHbqn/jiXSpcIRvDiJeN8jTFl5Js8fdyfOnSifIMp/yjGyHS6gc828+I2f7ZeIhNugokHtjuIpi1ehAcfcpOcixo/Ax39SxVOWB5/VA=="))
  }
}
