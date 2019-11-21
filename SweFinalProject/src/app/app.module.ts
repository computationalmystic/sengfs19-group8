import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListIssuesComponent } from './list-issues/list-issues.component';
import { CompareIssuesComponent } from './compare-issues/compare-issues.component';
import { CompareContributorsComponent } from './compare-contributors/compare-contributors.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { ReposComponent } from './repos/repos.component'; 
// import { HttpModule } from '@angular/http';
import { NgChartjsModule } from 'ng-chartjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListIssuesComponent,
    CompareIssuesComponent,
    CompareContributorsComponent,
    ReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartjsModule.registerPlugin([horizonalLine])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function horizonalLine(chartInstance) {
  const yScale = chartInstance.scales['y-axis-0'];
  const canvas = chartInstance.chart;
  const ctx = canvas.ctx;
  let index;
  let line;
  let style;
  let yValue;
  if (chartInstance.options.horizontalLine) {
    for (index = 0; index < chartInstance.options.horizontalLine.length; index++) {
      line = chartInstance.options.horizontalLine[index];

      if (!line.style) {
        style = 'rgba(169,169,169, .6)';
      } else {
        style = line.style;
      }

      if (line.y) {
        yValue = yScale.getPixelForValue(line.y);
      } else {
        yValue = 0;
      }

      ctx.lineWidth = 3;

      if (yValue) {
        ctx.beginPath();
        ctx.moveTo(0, yValue);
        ctx.lineTo(canvas.width, yValue);
        ctx.strokeStyle = style;
        ctx.stroke();
      }

      if (line.text) {
        ctx.fillStyle = style;
        ctx.fillText(line.text, 0, yValue + ctx.lineWidth);
      }
    }
    return;
  }
}

const horizonalLinePlugin = {
  beforeDraw: horizonalLine
};
