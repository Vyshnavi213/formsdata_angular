import { Component, OnInit } from '@angular/core';

import { ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatOption } from '@angular/material';

@Component({
  selector: 'app-matallcmp',
  templateUrl: './matallcmp.component.html',
  styleUrls: ['./matallcmp.component.css']
})
export class MatallcmpComponent implements OnInit {

  searchUserForm: FormGroup;

  userTypeFilters = [
    {
      key: 1, value: 'Value 1',
    },
    {
      key: 2, value: 'Value 2',
    },
    {
      key: 3, value: 'Value 3',
    },
    {
      key: 4, value: 'Value 4',
    }
  ];
  @ViewChild('allSelected', {static: false})
   private allSelected: MatOption;

  constructor(private fb: FormBuilder){}

  ngOnInit() {
    this.searchUserForm = this.fb.group({
      filterLabel: new FormControl('')
    });
  }

tosslePerOne(all){ 
   if (this.allSelected.selected) {  
    this.allSelected.deselect();
    return false;
}
  if(this.searchUserForm.controls.filterLabel.value.length==this.userTypeFilters.length)
    this.allSelected.select();

}
  toggleAllSelection() {
    if (this.allSelected.selected) {
      this.searchUserForm.controls.filterLabel
        .patchValue([...this.userTypeFilters.map(item => item.key), 0]);
    } else {
      this.searchUserForm.controls.filterLabel.patchValue([]);
    }
  }
}

