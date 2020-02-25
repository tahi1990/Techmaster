import {
  NgModule,
  ModuleWithProviders,
  SkipSelf,
  Optional
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Configuration } from "./configuration";

import { ProductControllerService } from "./api/productController.service";
import { CategoryControllerService } from "./api/categoryController.service";
import { UserControllerService } from "./api/userController.service";

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  exports: [],
  providers: [ProductControllerService, CategoryControllerService, UserControllerService]
})
export class ApiModule {
  public static forRoot(
    configurationFactory: () => Configuration
  ): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [{ provide: Configuration, useFactory: configurationFactory }]
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: ApiModule) {
    if (parentModule) {
      throw new Error(
        "ApiModule is already loaded. Import your base AppModule only."
      );
    }
  }
}
