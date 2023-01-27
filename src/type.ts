import { ReactNode } from 'react';

export interface IProp {
  /**
   * @description   画布宽度
   * @default       400
   */
   width?: number;
   /**
    * @description   画布高度
    * @default       200
    */
   height?: number;
   /**
    * @description   线宽
    * @default       4
   */
   lineWidth?: number;
   /**
    * @description   线段颜色
    * @default       'red'
   */
   strokeColor?: string;
   /**
    * @description   设置线条两端圆角
    * @default       'round'
   */
   lineCap?: string;
   /**
    * @description   线条交汇处圆角
    * @default       'round'
   */
   lineJoin?: string;
   /**
    * @description   画布背景颜色
    * @default       'transparent'
   */
   bgColor?: string;
   /**
    * @description   true
   */
   showBtn?: boolean;
   /**
   * @description   当保存时的回调, blob为生成的图片bob
   * @default       -
   */
   onSave?: (blob: Blob) => void;
  /**
   * @description   当画布清空时的回调, 参数为画布的上下文对象,可以直接使用canvas的api
   * @default       -
   */
   onClear?: (canvasContext: CanvasRenderingContext2D) => void;
   /**
   * @description   当画布结束时的回调
   * @default       -
   */
   onDrawEnd?: (canvas: HTMLCanvasElement) => void;
}
