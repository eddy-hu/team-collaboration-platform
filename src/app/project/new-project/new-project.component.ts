import {
  Component,
  OnInit,
  Inject,
  ChangeDetectionStrategy
} from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
@Component({
  selector: "app-new-project",
  templateUrl: "./new-project.component.html",
  styleUrls: ["./new-project.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewProjectComponent implements OnInit {
  title = "";
  form: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data,
    private dialogRef: MatDialogRef<NewProjectComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    if (this.data.project) {
      this.form = this.fb.group({
        name: [this.data.project.name, Validators.required],
        desc: [this.data.project.desc],
        coverImg: [this.data.project.coverImg]
      });
      this.title = 'Update Project';
    }else{
      this.form = this.fb.group({
        name: ['', Validators.required],
        desc: [],
        coverImg: ["assets/images/covers/nokia-cpc.png"]
      });
      this.title = 'Create Project';
    }
    
  }

  onClick() {
    this.dialogRef.close("I received your message");
  }

  onSubmit({ value, valid }, ev: Event) {
    ev.preventDefault();

    if (!valid) {
      return;
    }
    this.dialogRef.close(value);
  }
}
