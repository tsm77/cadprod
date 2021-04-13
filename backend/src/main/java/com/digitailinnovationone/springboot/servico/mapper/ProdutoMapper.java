package com.digitailinnovationone.springboot.servico.mapper;

import com.digitailinnovationone.springboot.dominio.Produto;
import com.digitailinnovationone.springboot.servico.dto.ProdutoDTO;
import org.mapstruct.Mapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;

@Mapper(componentModel = "spring")

public interface ProdutoMapper extends EntityMapper<ProdutoDTO, Produto> {
}
