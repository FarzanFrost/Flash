package com.example.flashbackend.DAO;

import com.example.flashbackend.Entity.Event;
import org.springframework.data.repository.CrudRepository;

import java.math.BigInteger;
import java.util.List;

public interface EventRepository extends CrudRepository<Event, BigInteger> {

    @Override
    List<Event> findAll();

}
