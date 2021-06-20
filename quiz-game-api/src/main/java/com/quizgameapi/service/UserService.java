package com.quizgameapi.service;

import com.quizgameapi.model.UserModel;
import com.quizgameapi.repository.IUserRepository;
import com.quizgameapi.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private IUserRepository userRepository;

    public List<User> getAll(){
        List<User> users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
        return users;
    }

    public UserModel getByCredentials(String email, String pass){
        List<User> user = userRepository.findByEmailAndPassword(email, pass);

        if(user.size() == 0){
            return null;
        }

        UserModel userModel = new UserModel();
        userModel.username = user.get(0).getUsername();

        return userModel;
    }
}
