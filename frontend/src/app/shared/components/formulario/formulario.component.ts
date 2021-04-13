import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Produtos } from 'src/app/dominios/produtos';
import { ProdutosService } from 'src/app/modulos/produto/service/produtos.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [MessageService],

})
export class FormularioComponent implements OnInit {

  @Input() produtos = new Produtos();
  @Input() edicao = false;
  @Output() produtoSalvo = new EventEmitter<Produtos>();
  
  formProduto: FormGroup;

  constructor(public messageService: MessageService, private produtoService: ProdutosService, private router: Router, private fb: FormBuilder, private route: ActivatedRoute) { }
   

  ngOnInit(): void {
    this.criarProduto();

  }

  criarProduto(){
    this.route.params.subscribe(params => {
      if(params.id){
        this.edicao = true;
        this.produtoService.obterPorId(params.id);
      }
    });
    this.formProduto = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      preco: ['', [Validators.required, Validators.minLength(3)]],
      descricao: ['', [Validators.required, Validators.minLength(10)]],

    })

  }

   salvarProduto(){
     if(this.formProduto.invalid){
       alert("Preencha todos os campos!")
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Formulario Invalido!', life: 3000});
      return;

     }if(this.edicao){
       this.produtoService.editar(this.produtos)
       .subscribe(produto =>{
        this.messageService.add({severity:'success', summary: 'Successo', detail: 'Usuario editado com sucesso!', life: 3000});
        alert("Produto alterado com sucesso!")
        this.fecharDialog(produto);
       }), (erro: HttpErrorResponse)=>{
        this.messageService.add({severity:'error', summary: 'Error', detail: erro.error.message, life: 3000});
       }
     }
    
     else{
       
      this.produtoService.create(this.produtos).subscribe(()=> {
        alert("Produto cadastrado com sucesso!") 
        this.router.navigate(['/listagem']);     
       }) 
     }
   }
   fecharDialog(produtoSalvo: Produtos){
     this.produtoSalvo.emit(produtoSalvo);
   }

  }

