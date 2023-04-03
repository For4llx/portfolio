from django.db import models


class Skill(models.Model):
    name = models.CharField(max_length=50)
    years_of_experience = models.IntegerField()

    def __str__(self):
        return self.name


class Project(models.Model):
    image = models.CharField(max_length=1000)
    name = models.CharField(max_length=50)
    skills = models.ManyToManyField("Skill")
    project_link = models.CharField(max_length=1000)
    code_link = models.CharField(max_length=1000)

    def __str__(self):
        return self.name
