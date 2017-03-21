/**
 * 
 * By:  Ghayyas Mubashir 
 * Date: Fri Aug 19 2016
 * Updated-At: Wed Mar 22 2017
 * 
 */



import {Component,NgZone} from "@angular/core";
import {NavController} from "ionic-angular";

/**
 * 
 * Component
 * 
 */
declare var CameraPreview:any;
@Component({
     selector: 'preview-html',
    templateUrl: 'preview.html'
})

/**
 * 
 * Preview Class
 * 
 */


export class preview {
    public getWidth: number;
    public getHeight : number;
    public calcWidth : number;
    constructor(private nav: NavController, private zone:NgZone){
   
             this.zone.run(() => {
            this.getWidth = window.innerWidth;
            
            this.getHeight = window.innerHeight;
        });
        console.log('width',this.getWidth);
        
           this.calcWidth = this.getWidth - 80;  // Calculate the width of device and substract 80 from device width;
           
             console.log('calc width',this.calcWidth);  
       
    }
    
    /**
     * 
     * Before Using Ionic Native Camera Preview Please Note...
     * 
     * 1. Camera Drag Working in android (However not tested in IOS)
     * 2. tap Photo not working in android (However not tested in IOS)
     * 3. Default Camera Direction i.e Front/Back is Working (However not tested in IOS)
     * 4. toBack and Alpha are useless in Android (However not checking in IOS)
     * 
     *  
     * */ 
    
    startCamera(){
        // let react = {x: 40, y: 100, width: this.calcWidth ,height: 220}   //Decrepted due to previous code
    CameraPreview.startCamera({x: 40, y: 100, width: this.calcWidth, height: 220, toBack: false, previewDrag: true, tapPhoto: true});
        //.startCamera(react, defaultCamera:'back',tapEnabled: true, dragEnabled: true, toBack:true, alpha:1);  //Decrepeted        
    }
    
    stopCamera(){
        CameraPreview.stopCamera();
    }
    
    takePicture(){
  
        // let size = {maxWidth: 1024, maxHeight: 640};
        // CameraPreview.takePicture(size);         //Decrepted
         CameraPreview.takePicture(function(imgData){
            (<HTMLInputElement>document.getElementById('previewPicture')).src = 'data:image/jpeg;base64,' + imgData;
         });
    }
    
    
    SwitchCamera(){
        CameraPreview.switchCamera();
    }
    showCamera(){
        CameraPreview.show();
    }
    hideCamera(){
        CameraPreview.hide();
    }
    
    
}