from django.db import models

class Person(models.Model):
    """ Represents a person that can attend meetings """
    position = models.TextField()
    name = models.TextField(unique=True)

class Organization(models.Model):
    name = models.TextField(unique=True)

    def dictify(self):
        return {
            'name': self.name,
        }

class Meeting(models.Model):
    date = models.DateField()
    place = models.TextField()
    docref = models.IntegerField()
    organization = models.ForeignKey(Organization)

    def dictify(self):
        return {
            'date': self.date.isoformat(),
            'place': self.place,
            'doc': self.docref,
            'organization': self.organization.dictify(),
        }

class Attendance(models.Model):
    meeting = models.ForeignKey(Meeting)
    person = models.ForeignKey(Person)
    present = models.BooleanField()

class Movement(models.Model):
    title = models.TextField()
    description_ref = models.IntegerField()
    document_ref = models.IntegerField()
    meeting = models.ForeignKey(Meeting)

    def dictify(self):
        return {
            'title': self.title,
            'document': self.document_ref,
            'description': self.description_ref,
            'meeting': self.meeting.dictify()
        }

class Vote(models.Model):
    person = models.ForeignKey(Person)
    movement = models.ForeignKey(Movement)
    yay_vote = models.BooleanField()
