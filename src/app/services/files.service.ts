import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { tap, map } from 'rxjs/operators';


interface File {
  originalname: string;
  filename: string;
  location: string;
}


@Injectable({
  providedIn: 'root'
})
export class FilesService {

  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/files';


  constructor(
    private http: HttpClient
  ) { }



  //FUNCTION PARA CREAR BOTON Y DESCARGAR EL ARCHIVO PDF, JUNTO AL EVENTO EN APP.COMPONENT.TS Y HTML
  getFile(name: string, url: string, type: string) {
    return this.http.get(url, {responseType: 'blob'})
    .pipe(
      tap(content => {
        const blob = new Blob([content], {type});
        saveAs(blob, name);
      }),
      map(() => true)
    );
  }

  //FUNCTION PARA CREAR BOTON Y SUBIR UN ARCHIVO, JUNTO AL EVENTO EN APP.COMPONENT.TS Y HTML
  uploadFile(file: Blob) {
    const dto = new FormData();
    dto.append('file', file);
    return this.http.post<File>(`${this.apiUrl}/upload`, dto, {
      //AVECES EL BACKEND NECESITA ESTOS PARAMETROS
      // headers: {
      //   'Content-type': "multipart/form-data"
      // }
    })
  }


}
