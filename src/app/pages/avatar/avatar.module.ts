import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvatarPageRoutingModule } from './avatar-routing.module';

import { ComponentsModule } from 'src/app/components/components.module';

import { AvatarPage } from './avatar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvatarPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AvatarPage]
})
export class AvatarPageModule {}
