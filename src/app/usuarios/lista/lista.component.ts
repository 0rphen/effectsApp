import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
    selector: 'app-lista',
    templateUrl: './lista.component.html',
    styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

    usuarios: Usuario[] = [];
    constructor(public usuarioServices: UsuarioService) { }

    ngOnInit() {
        this.usuarioServices.getUsers().subscribe(users => {
            console.log(users);
            this.usuarios = users;
        });
    }

}
