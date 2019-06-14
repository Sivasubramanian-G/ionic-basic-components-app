import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImageCardsPage } from './image-cards';

@NgModule({
  declarations: [
    ImageCardsPage,
  ],
  imports: [
    IonicPageModule.forChild(ImageCardsPage),
  ],
})
export class ImageCardsPageModule {}
