import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Produto } from 'src/app/dominios/produto';
import { ProdutosService } from '../../service/produto.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { finalize } from 'rxjs/operators';
import { MensagensUtil } from 'src/app/shared/util/mensagens.util';
import { FormularioComponent } from 'src/app/modulos/produto/components/formulario/formulario.component';
import { AlertaService } from 'src/app/shared/util/alerta.service';
import { ModalService } from 'src/app/shared/util/modal.serivce';
@Component({
  providers: [ConfirmationService],
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']

})
export class ListagemComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  @Output() produtoSalvo = new EventEmitter<Produto>();
  produtos: Produto[] = [];
  produto = new Produto();
  display = false;
  exibir = false;
  formularioEdicao: boolean;

  constructor(private produtoService: ProdutosService,
    private router: Router,
    private modalService: ModalService,
    private confirmationService: ConfirmationService,
    private alertaService: AlertaService,) { }

  ngOnInit(): void {
    this.search()

  }

  dimensoes = {
    altura: 'auto',
    largura: '50%'
};
  search() {
    this.blockUI.start(MensagensUtil.BLOCKUI_CARREGANDO);
    console.log(this.blockUI.start())
    this.produtoService.getProduto()
      .pipe(finalize(() => this.blockUI.stop()))
      .subscribe(response => { this.produtos = response
       },);
       
  }

  excluir(id: number) {
    this.confirmationService.confirm({
      message: MensagensUtil.CONFIRMAR_EXCLUSAO_REFERENCIA,
      header: 'Excluir Produto',
      icon: 'pi pi-times',
      acceptLabel: 'Sim',
      rejectLabel: 'Não', 
      accept: () => {
        this.blockUI.start(MensagensUtil.BLOCKUI_EXCLUINDO);
        this.produtoService.deletar(id)
          .pipe(finalize(() => this.blockUI.stop())).subscribe(() => {
            this.alertaService.sucesso(MensagensUtil.SUCESSO);
            this.search();
          });
      }
    });
  }


  mostarDialogDetails(id: number) {
    this.produtoService.obterPorId(id)
      .subscribe(produto => {
        this.produto = produto;
        this.exibir = true;

      })
  }

  abrirModalAlterar(id: number) {
    const modal = this.modalService.modalComponente(FormularioComponent, this.dimensoes, id);
    modal.onClose.subscribe(() => {
      this.search();
    });
  }


  abrirModalIncluir() {
    const modal = this.modalService.modalComponente(FormularioComponent);
    modal.onClose.subscribe(() => {
      this.search();
    });
  }


}
