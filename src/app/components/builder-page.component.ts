import { Component, ChangeDetectorRef } from "@angular/core";
import { _processContentResult, fetchOneEntry } from "@builder.io/sdk-angular";
import { environment } from "../../environments/environment";
import { CUSTOM_COMPONENTS } from "../builder-registry";

interface BuilderProps {
  apiVersion: string;
  canTrack?: boolean;
  trustedHosts?: undefined;
  apiKey: string;
  model: string;
  content: any;
}

@Component({
  selector: "app-builder-page",
  template: `
    <content-variants
      [model]="model"
      [content]="content"
      [apiKey]="apiKey"
      [customComponents]="customComponents"
    ></content-variants>
  `,
})
export class BuilderPage {
  title = "builder page";

  apiKey: BuilderProps["apiKey"] = environment.builderApiKey;
  model: BuilderProps["model"] = "page";
  content: BuilderProps["content"];

  customComponents = CUSTOM_COMPONENTS;

  constructor(private cdr: ChangeDetectorRef) {}

  async ngOnInit() {
    const urlPath = window.location.pathname || "/";

    const builderContent = await fetchOneEntry({
      model: "page",
      apiKey: environment.builderApiKey,
      userAttributes: {
        urlPath,
      },
    });

    if (!builderContent) {
      return;
    }

    this.content = builderContent;

    this.cdr.detectChanges();
  }
}
