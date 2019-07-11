import {Component, OnInit} from '@angular/core';
import { UserService } from '../user.service';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss']
})

export class TopBarComponent implements OnInit {

    constructor(private userService: UserService) {
        
    }

    ngOnInit() {

    }

    logout() {
        this.userService.disallow();
    }
}
