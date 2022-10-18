package com.example.flashbackend.DAO;

import com.example.flashbackend.Entity.Event;
import org.aspectj.internal.lang.annotation.ajcDeclareAnnotation;
import org.springframework.data.repository.CrudRepository;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

public interface EventRepository extends CrudRepository<Event, BigInteger> {

    @Override
    List<Event> findAll();


    Optional<Event> findById(String email);
}
