class ProjectController < ApplicationController
	protect_from_forgery with: :null_session
	def index
		projects = Project.all

		render json: ProjectSerializer.new(projects).serialized_json
	end

	def destroy
		project = Project.find_by(id: params[:id])
		
		if project.destroy
			head :no_content
		else
			render json: {error: project.errors.messages}, status: 422
		end
	end

	def show
		project = Project.find_by(id: params[:id])

		render json: ProjectSerializer.new(project, options).serialized_json
	end

	def createProject
		project = Project.new(name: params[:name],
			shortDescription: params[:shortDescription],
			longDescription: params[:longDescription],
			image: params[:image],
			gitLink: params[:gitLink],
			siteLink: params[:siteLink])

		if project.save
			render json: ProjectSerializer.new(project).serialized_json
		else
			render json: {error: project.errors.messages}, status: 422
		end
	end

	def updateProject
		project = Project.find(params[:id])

		if project.update(project_param)
			render json: ProjectSerializer.new(project).serialized_json
		else
			render json: {error: project.errors.messages}, status: 422
		end		   
	end

	private
	def project_param
		params.require(:project).permit(:id, :name, :image, :shortDescription, :longDescription, :gitLink, :siteLink)
	end
end
