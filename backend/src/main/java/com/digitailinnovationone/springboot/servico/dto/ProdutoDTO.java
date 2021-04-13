package com.digitailinnovationone.springboot.servico.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProdutoDTO {
    private Integer id;
    private String nome;
    private Double preco;
    private String descricao;
}
