package com.quizgameapi.controllers;


import com.quizgameapi.model.QuestionModel;
import com.quizgameapi.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @GetMapping("/questions")
    public ResponseEntity<List<QuestionModel>> getQuestions(@RequestParam Integer amount, @RequestParam String category, @RequestParam String difficulty, @RequestParam String type){

        // TODO: filter by criterias

        List<QuestionModel> questions = questionService.getAllByCriteria();

        return new ResponseEntity<>(questions, HttpStatus.OK);
    }
}