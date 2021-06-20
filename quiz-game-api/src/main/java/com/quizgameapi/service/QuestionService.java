package com.quizgameapi.service;

import com.quizgameapi.entity.Answer;
import com.quizgameapi.entity.Question;
import com.quizgameapi.model.QuestionModel;
import com.quizgameapi.model.enums.category;
import com.quizgameapi.model.enums.difficulty;
import com.quizgameapi.model.enums.type;
import com.quizgameapi.repository.IAnswerRepository;
import com.quizgameapi.repository.IQuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class QuestionService {
    @Autowired
    private IQuestionRepository questionRepository;

    @Autowired
    private IAnswerRepository answerRepository;

    public List<QuestionModel> getAllByCriteria(){
        List<QuestionModel> questionModels = new ArrayList<>();
        List<Question> questions = (List<Question>) questionRepository.findAll();
        List<Answer> answers = (List<Answer>) answerRepository.findAll();

        if(questions == null || questions.size() == 0){
            return null;
        }

        // TODO: Redis ile cache'lenebilir

        // TODO: foreign key konulup answer'ların otomatik getirilmesi sağlanabilir.

        // TODO: auto mapper kullanılabilir.

        questions.forEach(item -> {
            QuestionModel qm = new QuestionModel();
            qm.question = item.question_text;

            qm.category = category.values()[item.category].getName();
            qm.difficulty = difficulty.values()[item.difficulty].getName();
            qm.type = type.values()[item.type].getName();

            qm.incorrectAnswers = new ArrayList<>();

            for(Answer answer : answers){
                if(answer.question_id == item.id){
                    if(answer.is_correct == 1){
                        qm.correctAnswer = answer.answer_text;
                    }
                    else if(answer.is_correct == 0){
                        qm.incorrectAnswers.add(answer.answer_text);
                    }
                }
            }

            questionModels.add(qm);
        });

        return questionModels;
    }
}
