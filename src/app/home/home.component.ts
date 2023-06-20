import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };
    src = '../../assets/video/unpack.mp4'
    src2 = '../../assets/video/s21.mp4'
    src3 = '../../assets/video/a52.mp4'
    focus;
    focus1;
    textform = this.fb.group({
        name: '',
        phone: ''
    })
    constructor(private fb: FormBuilder, private http: HttpClient) { }
    toTop(event) {
        document.getElementById("content").scrollIntoView();
    }

    com = ""
    changeCom(flag : any){
        this.com = flag;
    }

    hope = ""
    changeHope(flag : any){
        this.hope = flag;
    }
    ngOnInit() {}

    async commit(){
        let name = this.textform.get('name');
        let phone = this.textform.get('phone');
        if(name.value == "" || phone.value == "" || this.com == "" || this.hope ==""){
            alert("입력을 완료해 주십시오.");
        }else{
            let data = {
                "name" : name.value,
                "phone" : phone.value,
                "hope_com" : this.com,
                "hope_model" : this.hope,
                "use_plag" : "Y"
            }
            await this.http.post(environment.endp1, JSON.stringify(data))
            .subscribe((res : any[]) =>{
            })
            alert("신청이 완료되었습니다.")
            window.location.reload();
        }
    }
}
