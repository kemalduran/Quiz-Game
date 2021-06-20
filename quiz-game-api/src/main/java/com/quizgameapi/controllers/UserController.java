package com.quizgameapi.controllers;

import com.quizgameapi.model.UserModel;
import com.quizgameapi.service.UserService;
import com.quizgameapi.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/login")
    public UserModel login(@RequestParam String email, @RequestParam String pass){
        UserModel model = userService.getByCredentials(email, pass);
        return model;
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getUsers(){
        List<User> users = userService.getAll();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }


}
