import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import * as usuariosAction from '../actions';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';

@Injectable()
export class UsuariosEffects {
    constructor(private actions$: Actions, public usuariosServices: UsuarioService) { }

    @Effect()
    cargarUsuarios$ = this.actions$.pipe(ofType(usuariosAction.CARGAR_USUARIOS), switchMap(() => this.usuariosServices.getUsers()
        .pipe(
            map(users => new usuariosAction.CargarUsuariosSuccess(users)),
            catchError(error => of(new usuariosAction.CargarUsuariosFail(error)))
        )));
}
