import { Component, OnInit, Injector } from '@angular/core';
import { BaseResourceForm } from 'src/app/shared/components/base-resource-form.component';
import { StudentModel } from '../../model/student-model';
import { StudentService } from '../../services/student.service';
import { Validators } from '@angular/forms';
import { LevelEducationComponent } from 'src/app/pages/level-education/level-education-form/level-education.component';
import { LevelEducationModel } from 'src/app/pages/level-education/model/level-education';
import { SchoolTimeModel } from 'src/app/pages/schoolTime/model/school-model';
import { SchoolgradeModel } from 'src/app/pages/schoolgrade/model/schoolgrade-model';
import { DistrictModel } from 'src/app/pages/district/model/district-model';
import { CityModel } from 'src/app/pages/city/model/city-model';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})


export class StudentFormComponent extends BaseResourceForm<StudentModel> implements OnInit {

  //escolaridade
  levelEducations: LevelEducationModel[] = [];

  //horarios escolar
  schoolTimes: SchoolTimeModel[] = []

  //series escolar
  schoolGrades: SchoolgradeModel[] = [];

  //estados
  ufs: DistrictModel[] = [];

  //cidades
  cities: CityModel[] = [];


  constructor(
    protected studentService: StudentService,
    protected injector: Injector
  ) {
    super(injector, new StudentModel(), studentService, StudentModel.fromJson)
  }

  ngOnInit() {
    //this.getLevelEducations();
    // this.getSchoolTime();
    this.getSeries();


    super.ngOnInit();
  }

  /* Criando o Formulario de Estudante*/
  protected buildResourceForm(): void {
    this.formGroup = this.formBuild.group({
      id: [null],
      name: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      ndateOfEnrollmentame: [null],
      trasferDate: [null],
      dateOfDeparture: [null],
      responsible: [null],
      cpfResponsible: [null], //falta
      email: ['', [Validators.required]],
      password: [null], // colocar depois
      telephone: ['', [Validators.required]],
      //schoolLevel: ['', [Validators.required]],
      schoolGrade: ['', [Validators.required]],
      institution: [null],
      street: ['', [Validators.required]],
      district: ['', [Validators.required]],
      postalCode: ['', [Validators.required]],
      number: ['', [Validators.required]],
      complement: [''],
      pointOfReference: [''],
      city: ['', [Validators.required]],
      notes: [null],

    })
  }

  /* Listar Escolaridades*/
  public getLevelEducations() {
    this.studentService.getEscolaridade().subscribe(
      result => this.levelEducations = result
    );
  }

  //pegando o id da escolaridade


  /* Listar Horarios*/
  public getSchoolTime() {
    this.studentService.getHorarios().subscribe(
      result => console.log(this.schoolTimes = result)
    );
  }

  //Serie - Classe
  public getSeries() {
    this.studentService.getSeries().subscribe(result => console.log(this.schoolGrades = result)
    );
  }

  //Cidades por Estado



}
