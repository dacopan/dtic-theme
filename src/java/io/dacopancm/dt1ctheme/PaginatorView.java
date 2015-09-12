/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.dacopancm.dt1ctheme;

import io.dacopancm.dt1ctheme.model.Car;
import java.io.Serializable;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ManagedProperty;
import javax.faces.bean.ViewScoped;

@ManagedBean(name = "dtPaginatorView")
@ViewScoped
public class PaginatorView implements Serializable {

    private List<Car> cars;
    private List<Car> selectedCars;

    public List<Car> getSelectedCars() {
        return selectedCars;
    }

    public void setSelectedCars(List<Car> selectedCars) {
        this.selectedCars = selectedCars;
    }

    @ManagedProperty("#{carService}")
    private CarService service;

    @PostConstruct
    public void init() {
        cars = service.createCars(50);
    }

    public List<Car> getCars() {
        return cars;
    }

    public void setCars(List<Car> cars) {
        this.cars = cars;
    }

    public void setService(CarService service) {
        this.service = service;
    }
}
