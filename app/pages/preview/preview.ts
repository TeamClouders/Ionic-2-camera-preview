/**
 * 
 * By:  Ghayyas Mubashir 
 * Date: Fri Aug 19 2016
 * 
 */



import {Component,NgZone} from "@angular/core";
import {NavController} from "ionic-angular";
import {CameraPreview} from 'ionic-native';

/**
 * 
 * Component
 * 
 */

@Component({
    templateUrl: 'build/pages/preview/preview.html'
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
        CameraPreview.setOnPictureTakenHandler().subscribe((d)=>{
         (<HTMLImageElement>document.getElementById('previewPicture')).src = d[0];
        //  (<HTMLImageElement>document.getElementById('originalPicture')).src= d[1];
           CameraPreview.stopCamera();
           console.log('d',d);
       });
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
     * 1. Camera Drag not Working in android (However not tested in IOS)
     * 2. tap Photo not working in android (However not tested in IOS)
     * 3. Default Camera Direction i.e Front/Back is not Working (However not tested in IOS)
     * 4. toBack and Alpha are useless in Android (However not checking in IOS)
     * 
     * Also Please note Im Just checking it on my android 4.4.2 device And im facing this issue.
     *  
     * */ 
    
    startCamera(){
        let options = {x: 40, y: 100, width: this.calcWidth ,height: 220, camera:'back',tapPhoto: true, previewDrag: true, toBack:true, alpha:1}
     
        CameraPreview.startCamera(options);        
    }
    
    stopCamera(){
        CameraPreview.stopCamera();
    }
    
    takePicture(){
  
        let size = {maxWidth: 1024, maxHeight: 640};
        CameraPreview.takePicture(size);
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