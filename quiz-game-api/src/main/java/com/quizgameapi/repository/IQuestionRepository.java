package com.quizgameapi.repository;
import com.quizgameapi.entity.Question;
import org.springframework.data.repository.CrudRepository;

public interface IQuestionRepository extends CrudRepository<Question, Integer>{
}
