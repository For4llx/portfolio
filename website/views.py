from django.shortcuts import render, redirect
from django.views.generic import TemplateView


class IndexView(TemplateView):
    """Display index"""

    template_name = "website/index.html"
