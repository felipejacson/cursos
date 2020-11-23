package br.com.cursos;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("br.com.cursos")
public class CursosApplication {

    public static void main(String[] args) {
        SpringApplication.run(CursosApplication.class, args);
    }

}
