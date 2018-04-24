import { Injectable } from '@angular/core';
import { Trabajo } from './trabajo';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TrabajosService {

  private URL ='https://fluenjobs-clone.firebaseio.com/trabajos';

  constructor(private htto: HttpClient) { }

  getTrabajos(){


  }

  getTrabajo(){


  }

  saveTrabajo(){


  }

  deleteTrabajo(){


  }

  updateTrabajo(){


  }

}
