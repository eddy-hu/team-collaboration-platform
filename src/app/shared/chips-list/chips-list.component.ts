import { Component, OnInit, Input, forwardRef, OnDestroy } from '@angular/core';
import { User } from '../../domain/user.model'
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  FormControl,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chips-list',
  templateUrl: './chips-list.component.html',
  styleUrls: ['./chips-list.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=> ChipsListComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(()=> ChipsListComponent),
      multi: true
    },
  ]
})
export class ChipsListComponent implements OnInit {

  @Input() multiple = true;
  @Input() PlaceholderText = 'Enter email';
  @Input() label = 'Add/Update member';
  form: FormGroup;
  items: User[] = [];
  memberResults$: Observable<User[]>;


  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.form=this.fb.group({
      memberSearch: ['']
    });


  }

  private propagateChange =(_: any) =>{};

  writeValue(obj: User[]): void{
    if(this.multiple){
      const userEntities = obj.reduce((e, c)=> ({...e, c}), {});
      if(this.items){
        const remaining = this.items.filter(item => !userEntities[item.id]);
        this.items = [...remaining, ...obj];
      }
    }else{
      this.items = [...obj];
    }
  }

  registerOnChange(fn: any): void{
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void{

  }

  validate(c: FormControl): {[key:string]: any} {
    return this.items ? null : {
      chipListInvalid: true
    };
  }

  removeMember(member: User){
    const ids = this.items.map(item => item.id);
    const i = ids.indexOf(member.id);
    if(this.multiple){
      this.items = [...this.items.slice(0,i), ...this.items.slice(i+1)];
    }else{
      this.items =[];
    }
    this.form.patchValue({memberSearch: ''});
    this.propagateChange(this.items);
  }

  handleMemberSelection(member: User){
    if(this.items.map(item => item.id).indexOf(member.id) !== -1){
      return;
    }
    this.items = this.multiple ?  [...this.items, member] : [member];
    this.form.patchValue({memberSearch: member.name});
    this.propagateChange(this.items);
  }

  displayUser(user: User): string{
    return user? user.name : '';
  }

  get displayInput(){
    return this.multiple || this.items.length === 0;
  }

}
