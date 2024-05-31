# frozen_string_literal: true

class PagesController < ApplicationController
  def index
    @kpis = JSON.parse(File.read('db/fixtures/kpi.json'))
    @grid_data = JSON.parse(File.read('db/fixtures/grid-data.json'))
    @pipeline_data = JSON.parse(File.read('db/fixtures/pipeline-data.json'))
    @ticket_escalations_data = JSON.parse(File.read('db/fixtures/ticket-escalations-data.json'))
  end
end
