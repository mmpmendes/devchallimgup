import { Component } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {

  onDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer) {
      const file = event.dataTransfer.files[0];
      this.uploadImage(file);
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
  }

  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      const file = fileInput.files[0];
      this.uploadImage(file);
    }
  }

  uploadImage(file: File) {
    // TODO: Implement image upload logic here
  }

}
