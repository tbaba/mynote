# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    @notes = Note.order(updated_at: :desc)
  end
end
