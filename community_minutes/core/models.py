from django.db import models

class Person(models.Model):
    """ Represents a person that can attend meetings """
    position = models.TextField()
    name = models.TextField()

class Organization(models.Model):
    name = models.TextField()

class Meeting(models.Model):
    date = models.DateField()
    place = models.TextField()
    docref = models.IntegerField()
    organization = models.ForeignKey(Organization)

class Attendance(models.Model):
    meeting = models.ForeignKey(Meeting)
    person = models.ForeignKey(Person)

class Movement(models.Model):
    title = models.TextField()
    description_ref = models.IntegerField()
    document_ref = models.IntegerField()
    meeting = models.ForeignKey(Meeting)

class Vote(models.Model):
    person = models.ForeignKey(Person)
    movement = models.ForeignKey(Movement)
    yay_vote = models.BooleanField()
