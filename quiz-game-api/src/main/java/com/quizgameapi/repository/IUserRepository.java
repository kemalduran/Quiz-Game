package com.quizgameapi.repository;

import com.quizgameapi.entity.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface IUserRepository extends CrudRepository<User, Integer> {
    List<User> findByEmailAndPassword(String email, String password);
}
