import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private toastController:ToastController){

  }
  messages: string[] = [];

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

  async add(message: string) {
    console.log(message)
    const toast = await this.toastController.create({
      message: message,
      duration: 1000
    });
    toast.present();
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}