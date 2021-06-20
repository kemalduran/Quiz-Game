package com.quizgameapi.repository;

import com.quizgameapi.entity.Answer;
import org.springframework.data.repository.CrudRepository;

public interface IAnswerRepository extends CrudRepository<Answer, Integer> {
}
