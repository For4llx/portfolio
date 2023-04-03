from django.shortcuts import render, redirect
from django.views.generic import TemplateView
from .models import Skill, Project


class IndexView(TemplateView):
    """Display index"""

    template_name = "website/index.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["skills"] = Skill.objects.all()
        context["projects"] = Project.objects.all()
        return context
