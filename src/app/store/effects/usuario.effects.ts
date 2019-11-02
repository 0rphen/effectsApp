import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import * as usuarioAction from '../actions';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuarioEffects {
    constructor(private actions$: Actions, public usuarioServices: UsuarioService) { }

    @Effect()
    cargarUsuario$ = this.actions$.pipe(ofType(usuarioAction.CARGAR_USUARIO), switchMap(action => this.usuarioServices.getUserByIdi(action['id'])
        .pipe(
            map(user => new usuarioAction.CargarUsuarioSuccess(user)),
            catchError(error => of(new usuarioAction.CargarUsuarioFail(error)))
        )));
}
