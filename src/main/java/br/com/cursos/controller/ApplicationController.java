package br.com.cursos.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class ApplicationController {

    @GetMapping(value = {"", "/"})
    public ModelAndView index() {
        return new ModelAndView("index");
    }

    @GetMapping("/p/{pagina}")
    public ModelAndView load(@PathVariable("pagina") final String pagina) {
        return new ModelAndView(pagina);
    }

}
