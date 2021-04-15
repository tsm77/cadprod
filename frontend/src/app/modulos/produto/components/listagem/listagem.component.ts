import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Produtos } from 'src/app/dominios/produtos';
import { ProdutosService } from '../../service/produtos.service';

@Component({
  providers: [ConfirmationService],
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
  
})
export class ListagemComponent implements OnInit {

  @Output() produtoSalvo = new EventEmitter<Produtos>();
  produtos: Produtos[] = [];
  produto = new Produtos();
  display = false;
  exibir = false;
  formularioEdicao: boolean;
 
  constructor(private produtoService: ProdutosService,
      private router: Router) { }

  ngOnInit(): void {
    this.buscarProdutos()
    
  }
  buscarProdutos(){
    this.produtoService.getProduto().subscribe(produtos => {
      this.produtos = produtos;
     
    })
  }


   
  deletarProduto(id: number){
    this.produtoService.deletar(id).subscribe(() =>{
      alert("Produto deletado!")
      this.router.navigate(['/listagem'])
      this.buscarProdutos();
    },
    
    )
    
  }mostarDialogDetails(id: number){
    this.produtoService.obterPorId(id)
    .subscribe(produto =>{
      this.produto = produto;
      this.exibir = true;

    })
  }


  mostrarDialogEditar(id: number){
    this.produtoService.obterPorId(id)
    .subscribe(produto =>{
      this.produto = produto;
      this.mostrarDialog(true);
    });
  }


  mostrarDialog(edicao = false) {
    this.display = true;
    this.formularioEdicao = edicao;
 
}
fecharDialog(produtoSalvo: Produtos){
  this.display = false;
  this.buscarProdutos();
}


}
